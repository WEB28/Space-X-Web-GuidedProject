import React from "react";
import { render } from "@testing-library/react";
import MissionsList from "./MissionsList.js";

test('renders without errors', () => {
    render(<MissionsList missions={[]} errors="" />)
})

test('renders error message if error is present', () => {
    // arrange, act, assert all at once
    const { queryByTestId, rerender} = render(<MissionsList missions={[]} error="" />)

    // assert that no error message is rendered
    // query for the element (Should return null)
    // assert with .toBeNull()
    expect(queryByTestId(/error-message/i)).toBeNull();

    // rerender the component with new props (errors)
    rerender(<MissionsList missions={[]} error="Some error message" />)
    
    // assert that the error message is rendered
    expect(queryByTestId(/error-message/i)).toBeInTheDocument();
})