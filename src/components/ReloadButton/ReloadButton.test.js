import React from "react";
import { render, shallow } from "enzyme";

import ReloadButton from "./ReloadButton";

test("Renders output", () => {
    expect.assertions(1);
    expect(render(<ReloadButton onClick={() => null} />)).toBeTruthy();
});

test("Add loading class when loading prop is defined", () => {
    expect.assertions(1);
    expect(
        render(<ReloadButton onClick={() => null} loading />).hasClass(
            "loading",
        ),
    ).toBeTruthy();
});

test("Triggers onClick callback on a DOM click event", () => {
    expect.assertions(4);

    // Create the mock functions
    const preventDefault = jest.fn().mockName("preventDefault()");
    const onClick = jest.fn().mockName("onClick()");

    // Render your component
    const componentWrapper = shallow(<ReloadButton onClick={onClick} />);

    // Assert that none of the mock functions have been called in the initial
    // render pass
    expect(preventDefault).not.toHaveBeenCalled();
    expect(onClick).not.toHaveBeenCalled();

    // Simulate a DOM click event on the anchor
    componentWrapper.find("a").simulate("click", {
        preventDefault,
    });

    // Assert that both mock functions have been called exactly once.
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledTimes(1);
});
