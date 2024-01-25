import "./Skills.scss";

const Skills = () => {
  return (
    <section id="skill-section">
      <div id="animate-container" className="container animate">
        <h1>Skills</h1>
        <div className="col">
          <h2 className="title">Language</h2>
          <ul className="skill">
            <li>
              <span className="blueline java"></span>
              <em>Java</em>
            </li>
            <li>
              <span className="blueline kotlin"></span>
              <em>Kotlin</em>
            </li>
            <li>
              <span className="blueline typescript"></span>
              <em>Typescript</em>
            </li>
            <li>
              <span className="blueline javascript"></span>
              <em>Javascript</em>
            </li>
            <li>
              <span className="blueline css"></span>
              <em>Css/Scss</em>
            </li>
            <li>
              <span className="blueline go"></span>
              <em>Go</em>
            </li>
            <li>
              <span className="blueline dart"></span>
              <em>Dart</em>
            </li>
          </ul>
        </div>
        <div className="col">
          <h2 className="framework title">Framework</h2>
          <ul className="skill">
            <li>
              <span className="greenline spring"></span>
              <em>Spring/Springboot</em>
            </li>
            <li>
              <span className="greenline hibernate"></span>
              <em>Hibernate</em>
            </li>
            <li>
              <span className="greenline nextjs"></span>
              <em>Nextjs</em>
            </li>
            <li>
              <span className="greenline react"></span>
              <em>React</em>
            </li>
            <li>
              <span className="greenline redux"></span>
              <em>Redux</em>
            </li>
            <li>
              <span className="greenline rq"></span>
              <em>React-query</em>
            </li>
            <li>
              <span className="greenline flutter"></span>
              <em>Fluter</em>
            </li>
            <li>
              <span className="greenline rn"></span>
              <em>React-native</em>
            </li>
          </ul>
        </div>
        <div className="col">
          <h2 className="programas title">Cloud/Middleware</h2>
          <ul className="skill">
            <li>
              <span className="redline aws"></span>
              <em>AWS</em>
            </li>
            <li>
              <span className="redline ibmcloud"></span>
              <em>IBM Cloud</em>
            </li>
            <li>
              <span className="redline was"></span>
              <em>IBM WAS</em>
            </li>
            <li>
              <span className="redline tomcat"></span>
              <em>Tomcat</em>
            </li>
            <li>
              <span className="redline ibmmq"></span>
              <em>IBM MQ</em>
            </li>
            <li>
              <span className="redline tibco"></span>
              <em>Tibco</em>
            </li>
            <li>
              <span className="redline rabbitmq"></span>
              <em>RabbitMQ</em>
            </li>
            <li>
              <span className="redline kafka"></span>
              <em>Kafka</em>
            </li>
            <li>
              <span className="redline redis"></span>
              <em>Redis</em>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
