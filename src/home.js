import self from './self.JPG';
import Linkedin from './socials/linkedin-rounded-svgrepo-com.svg';
import GitHub from './socials/github-142-svgrepo-com.svg';
import Email from './socials/email-svgrepo-com (1).svg';


function HomePage() {
  const modals = document.getElementsByClassName('modal');
  const overlays = document.getElementsByClassName('overlay');

  const showModal = () => {
    openModal(modals[0], overlays[0]); 
    function openModal(modal, overlay) {
    if (!modal || !overlay) return;
    modal.classList.add('active');
    overlay.classList.add('active');
  }
}
  const showSecondModal = () => {
    openModal(modals[1], overlays[0]); 
    function openModal(modal, overlay) {
    if (!modal || !overlay) return;
    modal.classList.add('active');
    overlay.classList.add('active');
  }

  }

  const hideModal = () =>{
    closeModal(modals[0], overlays[0]);
    function closeModal(modal, overlay){
        if(!modal || !overlay) return;
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }
  }
  const hideSecondModal = () =>{
    closeModal(modals[1], overlays[0]);
    function closeModal(modal, overlay){
        if(!modal || !overlay) return;
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }
  }

  

  return (
    <>
    {/*----------------- Header Section --------*/}
    <div className="Home_Page">
        <img src={ self } alt='Self' />
        <div className='page_content'>
        <h2>Hey, I'm Ayanda Gumede.</h2><br />
        <p>Software Developer.</p>
        </div> 
      </div>

      {/* ------------------Social Section----------------------------------- */}
      <div className='socials'>
        <div className='social-images'>
          <a href='https://www.linkedin.com/in/ayanda-gumede-b69413266'><img src={ Linkedin } alt='Linked-In' /></a>
          <a href='https://github.com/AyandaGumede10'><img src={ GitHub } alt='GitHub' /></a>
          <a href='mailto:gumedeayanda1715@gmail.com'><img src={Email} alt='Email' /></a>
        </div>
      </div>

      <div className='bio'>
      I'm a software developer passionate about crafting innovative solutions that merge technical precision with user-centric design.
      </div>
      {/* --------------------Resume-------------------- */}
    <div className='resume'>
      <p id='section-title'>Resume</p>
        <div className='resume-card'>
          <p>kindly review my resume</p>
        <button><a href='Ayanda Gumde Resume.pdf' download="Ayanda Gumde Resume">Download Resume</a></button>
        </div>
    </div>
    {/*  ------------------Personal Info---------------- */}
      <div className='personal-info'>
        <p id='section-title'>Get to know </p>
        <details>
          <summary onClick={showModal}> Regarding Myself and My Adventures</summary>
        </details>
        <details>
          <summary id='dev' onClick={showSecondModal}>Software Development Skills </summary>
          
        </details>
      </div>
      {/* ------------Certificate--------------------- */}
<div className='certificate'>
  <p id='section-title'>Achievements</p>
  
  {/* AWS Academy */}
  <div className='certificate-card'>
    <div className='certifacte-content'>
      <h2>AWS Academy Cloud Foundations - Amazon Web Services</h2>
      <p>Cloud computing concepts, including core AWS services, security, and the foundational knowledge needed to begin working with cloud-based systems.</p>
      <button><a href='https://www.freecodecamp.org/certification/Gumede/foundational-c-sharp-with-microsoft'>Visit</a></button>
    </div>
  </div>

  {/* FREECODECAMP - C# */}
  <div className='certificate-card'>
    <div className='certifacte-content'>
      <h2>FreeCodeCamp: Foundational C# with Microsoft</h2>
      <p>Essential concepts such as data types, object-oriented programming, and foundational principles for backend development.</p>
      <button><a href='https://www.freecodecamp.org/certification/Gumede/foundational-c-sharp-with-microsoft'>Visit</a></button>
    </div>
  </div>

  {/* FREECODECAMP - Frontend Libraries */}
  <div className='certificate-card'>
    <div className='certifacte-content'>
      <h2>FreeCodeCamp: Front-end Development Libraries</h2>
      <p>Gained expertise in popular frontend libraries, including React, and honed skills in building dynamic, responsive user interfaces.</p>
      <button><a href='https://www.freecodecamp.org/certification/Gumede/front-end-development-libraries'>Visit</a></button>
    </div>
  </div>

  {/* SOLOLEARN - JavaScript */}
  <div className='certificate-card'>
    <div className='certifacte-content'>
      <h2>Sololearn: Intermediate JavaScript</h2>
      <p>Advanced my JavaScript skills by learning about ES6 features, asynchronous programming, and complex data structures, building upon a strong foundational understanding.</p>
      <button><a href='https://www.sololearn.com/certificates/CC-WQQQMKTN'>Visit</a></button>
    </div>
  </div>
</div>


      {/* -------Modal------- */}

      {/* first Modal */}
      <div className='modal' id='modal'>
        <div className='modal-header'>
          <button className='close-button' onClick={hideModal}>&times;</button>
        </div>
        <div className='modal-body'>
        <p>
        Ayanda Gumede is a dedicated and forward-thinking Bachelor of Science in IT (Computer Science) student at Richfield College, with a passion for innovation and problem-solving. As an aspiring Full Stack Software Engineer, Ayanda demonstrates a commitment to excellence in every project, leveraging his academic knowledge and practical experience to deliver impactful solutions. 
        </p>
        <p>
        His journey has been marked by notable achievements, such as winning the 2024 Richfield College National Hackathon, where he played a pivotal role in developing an AI-powered disease diagnosis tool.
        Ayanda was Involved in the integration of advanced natural language processing (NLP) features, ensuring a seamless and user-friendly interaction, and collaborated on both frontend and backend development to create a solution that prioritized accessibility and accuracy.
        Beyond his academic accomplishments, Ayanda’s well-rounded personality and diverse interests enrich his approach to challenges.
        </p>
        </div>
      </div>

      {/* Second Modal */}
      <div className='modal' id='modal-2'>
        <div className='modal-header'>
          <button className='close-button' onClick={hideSecondModal}>&times;</button>
        </div>
        <div className='modal-body' id="modal-2-bd">
          <ul>
            <h3>Programming Languages:</h3>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
            <li>C#</li>
            
            <h3>Frameworks & Libraries:</h3>
            <li>ReactJS</li>
            <li>React Native – Mobile development</li>
            <li>Angular</li>
            <li>TypeScript</li>
            
            <h3>API Development:</h3>
            <li>RESTful APIs</li>
            <li>GraphQL APIs</li>
            
            <h3>Databases:</h3>
            <li>SQL</li>
            
            <h3>Software Development & Operations:</h3>
            <li>DevOps</li>
            <li>CI/CD (Continuous Integration & Continuous Delivery)</li>
            <li>Agile Development</li>
            <li>Git & GitHub – Version Control</li>
          </ul>

        </div>
      </div>
      <div id='overlay' className='overlay'></div>
      <p className='copyright'>Copyright &copy;2024 Design by <a href='https://www.linkedin.com/in/ayanda-gumede-b69413266'>Ayanda Gumede</a></p>
    </>
  );
}

export default HomePage;
