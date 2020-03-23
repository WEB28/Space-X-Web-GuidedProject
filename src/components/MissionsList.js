import React from "react";

const MissionsList = props => {
  return (
    <section className="missions-list">
      {props.error ? (
        <div data-testid="error-message" className="error">{props.error}</div>
      ) : (
        <div>
          {props.missions.map(mission => (
            <div 
              data-testid="mission-list" className="mission" 
              key={mission.mission_id}
              >
              {mission.mission_name}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MissionsList;

/* Tests
1) Test that the component renders with empty props (when component mounts)
    - props.error: ""
    - props.missions: []
2) Test that the component shows an error message when passed an error string
    - props.error: "some error message string"
    - Check that the error div renders
    - Check (assert) that the missions list does NOT render
    // Happy path
3) Test that the missions list is rendered when there is no error, and when
props.missions has data
*/