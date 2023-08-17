import React from 'react';
import Sidebar from '../../components/Sidebar';
import Icons from '../../components/Icons';
import './home.scss';
import LanguageSelect from '../../components/LanguageSelect';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
        <div className="fixed right-40 top-20 w-120">
          <LanguageSelect />
        </div>
        <div className="assist-section">
          <h1>
            <span className="text-[#E2E8F0]">{t('Chat with')}</span>
            <span className="text-[#E2E8F0]">{t('Azull')}</span>
          </h1>
          <div className="option-container">
            <p>{t('or_try_asking')}</p>
            <div className="option-group">
              {options.map((item, ind) => {
                return <div key={ind}>{t(`option${ind}`)}</div>;
              })}
            </div>
          </div>
        </div>
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
              <input type="text" />
              <Icons icon="Send" size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
