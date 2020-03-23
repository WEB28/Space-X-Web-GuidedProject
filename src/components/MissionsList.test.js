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

const mockMissionsData = [
    {
        mission_name: "Thaicom",
        mission_id: "9D1B7E0",
        manufacturers: ["Orbital ATK"],
        payload_ids: ["Thaicom 6", "Thaicom 8"],
        wikipedia: "https://en.wikipedia.org/wiki/Thaicom",
        website: "http://www.thaicom.net/en/satellites/overview",
        twitter: "https://twitter.com/thaicomplc",
        description:
          "Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology."
    },
    {
        mission_name: "Telstar",
        mission_id: "F4F83DE",
        manufacturers: ["SSL"],
        payload_ids: ["Telstar 19V", "Telstar 18V"],
        wikipedia: "https://en.wikipedia.org/wiki/Telesat",
        website: "https://www.telesat.com/",
        twitter: null,
        description:
          "Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009."
    }
]
test('MissionsList renders the list of missions', () => {
    const { queryAllByTestId, queryByTestId, rerender } = render(<MissionsList missions={[]} error="" />);

    expect(queryAllByTestId(/mission-list/i)).toHaveLength(0);

    rerender(<MissionsList missions={mockMissionsData} error="" />);

    expect(queryAllByTestId(/mission-list/i)).toHaveLength(2);
    expect(queryByTestId(/error-message/i)).toBeNull();

    // const { queryAllByTestId, queryByTestId, rerender } = render(
    //     <MissionsList missions={[]} error="" />
    //   );
    //   expect(queryAllByTestId(/mission-list/i)).toHaveLength(0);
    //   rerender(<MissionsList missions={mockMissionsData} error="" />);
    //   expect(queryAllByTestId(/mission-list/i)).toHaveLength(2);
    //   expect(queryByTestId(/error-message/i)).toBeNull();
})