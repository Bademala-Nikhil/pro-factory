import "../styles/team.css";
import team1 from "../images/team-1.jpeg";
import team2 from "../images/team-2.jpeg";
import team3 from "../images/team-3.jpeg";
import team4 from "../images/team-4.jpeg";


const teamMembers = [
  {
    name: "Ronald Richards",
    role: "Manufacturing Executive",
    img: team1,
  },
  {
    name: "Brooklyn Simmons",
    role: "Industrial Engineer",
    img: team2,
  },
  {
    name: "Cameron Williamson",
    role: "Production Supervisor",
    img: team3,
  },
  {
    name: "Darlene Robertson",
    role: "Manufacturing Executive",
    img: team4,
  },
];

const Team = () => {
  return (
    <section className="team">
      <div className="team-container">
        {/* HEADER */}
        <div className="team-header">
          <div>
            <span className="team-tag">OUR TEAM</span>
            <h2>
              Core strengths in <br />
              <span>industrial innovation</span>
            </h2>
          </div>

          <button className="team-btn">All Member →</button>
        </div>

        {/* MEMBERS */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
