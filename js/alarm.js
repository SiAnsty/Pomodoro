import { state } from "./state.js";

const audio = {
work: new Audio('audio/san-andreas.mp3'),
break: new Audio('audio/polnomochiya.mp3'),
relax: new Audio('audio/strashno-ochen-strashno.mp3')
};

export const alarm = () => {
  audio[state.status].play();
};
