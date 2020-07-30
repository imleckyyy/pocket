import { ADD_ITEM, REMOVE_ITEM } from 'actions';

const initialState = {
  videos: [
    {
      id: '_123123',
      type: 'videos',
      title: 'Biznes z PASJĄ generuje MILIONOWE obroty | Stefan Sadka | JS Druk',
      description: '',
      image: '',
      link: 'https://www.youtube.com/watch?v=CmHfVslGgRQ',
    },
    {
      id: '_adcasg2',
      type: 'videos',
      title: 'Przygotowujemy samochód do jazdy testowej! - Polskie Porsche #87',
      description: '',
      image: '',
      link: 'https://www.youtube.com/watch?v=OGscYtZe6Z4',
    },
  ],
  articles: [
    {
      id: '_asd23',
      type: 'articles',
      title: '4 JavaScript Design Patterns You Should Know',
      description: 'Wzorce JS -> do przypomnienia',
      image: '',
      link:
        'https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know?fbclid=IwAR0mp-qoOfOqj9LlKLLxaE-67kuq8V9_cHotmNxoUL5jV15r-T1Qser0gz8',
    },
    {
      id: '_sd2',
      type: 'articles',
      title: 'Time to First Byte: What It Is and Why It Matters',
      description: '',
      image: 'https://csswizardry.com/wp-content/uploads/2019/08/screenshot-ttfb.png',
      link: 'https://csswizardry.com/2019/08/time-to-first-byte-what-it-is-and-why-it-matters/',
    },
    {
      id: '_zxcasd3',
      type: 'articles',
      title: 'Time to First Byte: What It Is and Why It Matters',
      description: '',
      image: 'https://csswizardry.com/wp-content/uploads/2019/08/screenshot-ttfb.png',
      link: 'https://csswizardry.com/2019/08/time-to-first-byte-what-it-is-and-why-it-matters/',
    },
    {
      id: '_ascxzcsdga',
      type: 'articles',
      title: 'Time to First Byte: What It Is and Why It Matters',
      description: '',
      image: 'https://csswizardry.com/wp-content/uploads/2019/08/screenshot-ttfb.png',
      link: 'https://csswizardry.com/2019/08/time-to-first-byte-what-it-is-and-why-it-matters/',
    },
  ],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        [payload.type]: [...state[payload.type], payload],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        [payload.type]: [...state[payload.type].filter((item) => item.id !== payload.id)],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
