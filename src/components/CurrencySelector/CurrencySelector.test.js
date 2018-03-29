import React from "react";
import { shallow, render } from "enzyme";

import CurrencySelector from "./CurrencySelector";

const currencies = ["ONE", "TWO"];

test("Renders output", () => {
    expect.assertions(1);

    expect(
        render(
            <CurrencySelector
                onSelect={() => null}
                value={currencies[0]}
                currencies={currencies}
            />,
        ),
    ).toBeTruthy();
});

test("Renders currencies as options in the right order", () => {
    expect.assertions(currencies.length);

    const componentWrapper = shallow(
        <CurrencySelector
            value={currencies[0]}
            onSelect={() => null}
            currencies={currencies}
        />,
    );

    for (let index = 0; index < currencies.length; index++) {
        expect(
            componentWrapper
                .find("option")
                .at(index)
                .props().value,
        ).toBe(currencies[index]);
    }
});

test("Correctly passes the value", () => {
    expect.assertions(1);

    const componentWrapper = shallow(
        <CurrencySelector
            onSelect={() => null}
            value={currencies[0]}
            currencies={currencies}
        />,
    );

    expect(componentWrapper.find("select").props().value).toBe(currencies[0]);
});

test("Triggers onSelect() on change", () => {
    expect.assertions(2);

    const onSelect = jest.fn().mockName("onSelect()");

    const componentWrapper = shallow(
        <CurrencySelector
            onSelect={onSelect}
            value={currencies[0]}
            currencies={currencies}
        />,
    );

    componentWrapper.find("select").simulate("change", {
        target: {
            value: currencies[1],
        },
    });

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith(currencies[1]);
});
