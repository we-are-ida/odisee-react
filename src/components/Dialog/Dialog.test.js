import React from "react";
import { shallow } from "enzyme";

import Dialog from "./Dialog";

test('Renders "No coin available" when no data is provided', () => {
    // Set assetions count
    expect.assertions(1);

    // TODO: Put a test here
});

test("Renders label and value when data is provided", () => {
    // Set assertions count
    expect.assertions(2);

    const componentWrapper = shallow(
        <Dialog
            data={{
                label: "LABEL",
                value: "VALUE",
            }}
        />,
    );

    expect(
        componentWrapper
            .find(".info")
            .childAt(0)
            .text(),
    ).toBe("LABEL");
    expect(
        componentWrapper
            .find(".info")
            .childAt(1)
            .text(),
    ).toBe("VALUE");
});
