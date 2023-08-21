import React from 'react';
import Sidebar from '../../components/Sidebar';
import Icons from '../../components/Icons';
import './home.scss';
import LanguageSelect from '../../components/LanguageSelect';
import { useTranslation } from 'react-i18next';
import DarkMode from '../../components/DarkMode';
import { useDispatch, useSelector } from 'react-redux';
import { sendUserInput } from '../../redux/chatbotReducer';
import { openSnackBar } from '../../redux/snackBarReducer';

const options = [
  'Help me write a blog post',
  'Help me make money',
  'Act as an Interviewer',
  'Create me the best resume',
  'Create a Marketing plan',
  'Play Rock, Paper, Scissors',
  'Help me translate a content'
];

const Home = () => {
  const { globalState } = useSelector((state) => state);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // const [prompts, setPrompts] = React.useState([
  //   {
  //     label: 'Model: gpt-3.5-turbo',
  //     active: true
  //   },
  //   {
  //     label: 'New Chat',
  //     active: false
  //   }
  // ]);
  // const [sidebarOpen, setSidebarOpen] = React.useState(true);

  // const getWidth = () => {
  //   return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  // };

  React.useEffect(() => {
    // const setResponsiveness = () => {
    //   getWidth() < 1024 ? setSidebarOpen(false) : setSidebarOpen(true);
    // };
    // setResponsiveness();
    // window.addEventListener('resize', setResponsiveness);
    // eslint-disable-next-line
  }, []);

  const [mode, setMode] = React.useState(globalState.mode);
  const [user_input, setUserInput] = React.useState('');
  const [history, setHistory] = React.useState([]);

  React.useEffect(() => {
    setMode(globalState.mode);
  }, []);

  React.useEffect(() => {
    setMode(globalState.mode);
  }, [globalState.mode]);

  const keyDownHandler = (e) => {
    if (e.key == 'Enter') {
      clickSend();
    }
  };

  const clickSend = async () => {
    if (user_input != '') {
      console.log(user_input);
      setUserInput('');

      const userMsg = {
        type: 'user',
        msg: user_input
      };

      let tmp_history = history;
      tmp_history = [...tmp_history, { ...userMsg }];
      setHistory([...tmp_history]);

      const response = await dispatch(sendUserInput(user_input));

      if (response == false) {
        dispatch(openSnackBar({ message: t('server_error'), status: 'error' }));
      } else {
        console.log(response);
        const botMsg = {
          type: 'bot',
          msg: response.result
        };

        tmp_history = [...tmp_history, { ...botMsg }];
        setHistory([...tmp_history]);
      }

      console.log('history', tmp_history);
    }
  };

  return (
    <div className="home">
      {/* {sidebarOpen ? (
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      ) : (
        <div className="hamburger-container" onClick={() => setSidebarOpen(true)}>
          <Icons icon="Hamburger" size={30} fill="white" />
        </div>
      )} */}
      <div className="home-main">
        <div className="fixed right-40 top-20 w-240 flex">
          <DarkMode />
          <LanguageSelect />
        </div>
        {history.length == 0 ? (
          <div className="assist-section">
            <h1>
              <span className="dark:text-[#E2E8F0] text-black">{t('Chat with')}</span>
              <span className="dark:text-[#70c9df] text-[#205866]">{t('Azull')}</span>
            </h1>
            <div className="option-container">
              <p className="!text-black dark:!text-[#E2E8F0] ">{t('or_try_asking')}</p>
              <div className="option-group">
                {options.map((item, ind) => {
                  return <div key={ind}>{t(`option${ind}`)}</div>;
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="history">
            {history.map((data, index) => (
              <div className="message_item" key={index}>
                <p className="message_type">{data.type == 'user' ? t('you') : 'Anna'}:</p>
                <p>{data.msg}</p>
              </div>
            ))}
          </div>
        )}
        <div className="sender-section">
          {/* <div className="prompt-options">
            {prompts.map((item, ind) => {
              return (
                <div
                  key={ind}
                  className={item.active ? 'text-[#34D399]' : 'text-[#E4E4E7]'}
                  onClick={() => {
                    let data = prompts.map((ele) => {
                      return { ...ele, active: false };
                    });
                    data[ind].active = true;
                    setPrompts(data);
                  }}
                >
                  {t(`${item.label}`)}
                </div>
              );
            })}
          </div> */}
          <div className="input-container">
            <Icons icon="User" size={24} />
            <div className="input-form">
              <input
                type="text"
                value={user_input}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => keyDownHandler(e)}
              />
              <span className="cursor-pointer" onClick={() => clickSend()}>
                <Icons icon={mode == 'dark' ? 'Send' : 'Send_Dark'} size={18} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
