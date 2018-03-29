const SYMBOLS = {
    EUR: "€",
    USD: "$",
    GBP: "£",
};

const getSymbol = currency => SYMBOLS[currency] || "?";

/**
 * Voeg een random delay toe om problematisch netwerkverkeer te simuleren
 */
const delay = promise =>
    __DEVELOPMENT__
        ? new Promise(resolve =>
              setTimeout(
                  () => resolve(promise),
                  (r => r * r * 4000)(Math.random()),
              ),
          )
        : promise;

export class ApiClient {
    constructor(baseUrl) {
        // Trim trailing slash
        this.baseUrl = baseUrl.replace(/\/$/, "");
    }

    fetch(path, options) {
        return delay(
            fetch(`${this.baseUrl}/${path}`, options).then(response => {
                // Make the api more exciting
                if (__DEVELOPMENT__ && Math.random() < 0.2) {
                    throw new Error("Some api-client induced ¿chaos? ;-)");
                }

                if (response.status >= 400) {
                    throw new Error(
                        `${response.status}: ${response.statusText}`,
                    );
                }

                return response.json();
            }),
        );
    }

    formatParams(params) {
        return Object.keys(params).reduce(
            (accumulator, current, index) =>
                `${accumulator}${index ? "&" : ""}${encodeURIComponent(
                    current,
                )}=${encodeURIComponent(params[current])}`,
            "",
        );
    }

    getList(currency, limit = 10) {
        return this.fetch(
            `ticker/?${this.formatParams({
                convert: currency,
                limit,
            })}`,
        ).then(data =>
            data.map(item => ({
                label: item.name,
                value: `${getSymbol(currency)}${
                    item[`price_${currency.toLowerCase()}`]
                }`,
            })),
        );
    }
}

export default new ApiClient(__API_URL__);
