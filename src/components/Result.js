import React from "react";
import { useSelector } from "react-redux";

const dictionary = {
  name: "სახელი",
  surname: "გვარი",
  mail: "მეილი",
  hadCovid: "გქონდა კოვიდი?",
  antisxeulebi: "გაიკეთე ანტისხეულების ტესტი?",
  antibodiesDate: "ანტისხეულების გაკეთების თარიღი",
  antiBodies: "ანტისხეულების რაოდენობა",
  physicalMeetups: "რას ფიქრობ ფიზიკურად შეკრებებზე?",
  currentOpinion: "ახლანდელ გარემოზე რას ფიქრობ?",
  onlineMeetups: "არაფორმალური ონლაინ შეხვედრები კვირაში რამდენჯერ უნდა იყოს?",
  workInOffice: "ოფისში რამდენი დღე იმუშავებდი კვირაში?",
};

function Result() {
  const state = useSelector(state => state.user);

  return (
    <div className="result">
      <div>
        {state &&
          Object.keys(state).map(item => {
            return Object.keys(state[item]).map((field, index) => {
              return (
                state[item][field] && (
                  <div key={index}>
                    <p>
                      <b>{dictionary[field]}</b>
                    </p>
                    <p>
                      <i>{state[item][field]}</i>
                    </p>
                  </div>
                )
              );
            });
          })}
      </div>
    </div>
  );
}

export default Result;
