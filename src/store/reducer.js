import { 
    ADD_QUESTION,ADD_USERNAME
  } from './actions';
  
  
  const initialState = {
    questions: [
        {
        id:1,
        question: "Какие герои в доте имеют нестандартное сопротивление к магии?",
        multiple:true,
        answers:[
            {
                answer:"Axe",
                correct:false
            },
            {
                answer:"Meepo",
                correct:true
            },
            {
                answer:"Sniper",
                correct:false
            },
            {
                answer:"Visage",
                correct:true
            }]
        }
      ,
        {
          id:2,
          question:
            "Сколько на карте присутствует торговых лавок?",
            multiple:false,
            answers:[
                {
                    answer:"3",
                    correct:false
                },
                {
                    answer:"5",
                    correct:false
                },
                {
                    answer:"2",
                    correct:false
                },
                {
                    answer:"4",
                    correct:true
                }] 
         
        },
        {
            id:3,
          question: "Какое время перезарядки у Manta Style??",
          multiple:true,
          answers:[
            {
                answer:"35 секунд",
                correct:true
            },
            {
                answer:"25 секунд",
                correct:false
            },
            {
                answer:"50 секунд",
                correct:true
            },
            {
                answer:"45 секунд",
                correct:false
            }] 
            
        
        },
        {
            id:4,
          question: "На место какого панды перемещается Brewmaster в конце действия ульты Primal Split?",
          multiple:false,
          answers:[
            {
                answer:"Случайного",
                correct:false
            },
            {
                answer:"Earth, Fire, Storm",
                correct:false
            },
            {
                answer:"Earth, Storm, Fire",
                correct:true
            },
            {
                answer:"Storm, Earth, Fire",
                correct:false
            }] 
            
        },
        {
            id:5,
          question: "Сколько во второй доте героев, имена которых начинаются на “W”?",
          multiple:false,
          answers:[
            {
                answer:"3",
                correct:false
            },
            {
                answer:"4",
                correct:false
            },
            {
                answer:"5",
                correct:false
            },
            {
                answer:"6",
                correct:true
            }] 
          
        },
        {
            id:6,
          question: "Можно ли сбросить перезарядку Black King Bar при помощи Refresher Orb?",
          multiple:false,
          answers:[
            {
                answer:"Можно",
                correct:false
            },
            {
                answer:"Можно, но осторожно",
                correct:false
            },
            {
                answer:"Нельзя",
                correct:false
            },
            {
                answer:"В первой доте нельзя, во второй - можно",
                correct:true
            }] 
            
        },
        {
            id:7,
          question: "Сколько процентов HP дает 10 армора??",
          multiple:false,
          answers:[
            {
                answer:"40%",
                correct:false
            },
            {
                answer:"45%",
                correct:false
            },
            {
                answer:"55%",
                correct:false
            },
            {
                answer:"60%",
                correct:true
            }] 
            
        },
        {
            id:8,
          question: "У какого героя в умениях есть механика магического вампиризма (spell vamp)?",
          multiple:false,
          answers:[
            {
                answer:"Techies",
                correct:false
            },
            {
                answer:"Riki",
                correct:false
            },
            {
                answer:"N`aix",
                correct:true
            },
            {
                answer:"Invoker",
                correct:false
            }] 
            
        },
      
      ],
    username:null
  }
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD_QUESTION: 
        return {
          ...state,
          questions: [...state.questions, action.payload] 
        }
        case ADD_USERNAME: 
        return {
          ...state,
          username: action.payload,
        }
      default:
        return state;
    }
  }