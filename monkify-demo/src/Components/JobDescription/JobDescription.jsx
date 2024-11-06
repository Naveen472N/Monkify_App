import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./JobDescription.css";
import { Navbar } from "../Header/Header";

function JobDescription() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Sidebar></Sidebar>

          <div className="col-md-6">
            <div className="p-4">
              <div className=" d-inline">
                <Link to="/" className=" text-decoration-none">
                  <i className="bi bi-arrow-left"></i> Back to Job List
                </Link>

                <h3>UI/UX Designer</h3>
                <hr />
              </div>
              <ul className="nav nav-tabs mt-4" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#jobDescription"
                  >
                    Job Description
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#candidates">
                    Candidates
                  </a>
                </li>
              </ul>

              <div className="tab-content mt-3">
                <div id="jobDescription" className="tab-pane active">
                  <h3>Job Description</h3>
                  <hr />
                  <h5>About Company</h5>
                  <p>
                    We craft digital products for business and user goals. Help
                    find solutions with UI/UX designs that are intuitive and in
                    accordance with client business goals. We provide a
                    high-quality service in UI/UX Design & Development. We craft
                    digital products for businesses in achieving user goals by
                    providing intuitive solutions. We have worked with a vast
                    number of clients who have different backgrounds such as
                    construction, insurance, health, marketing, cryptocurrency,
                    stocks, games, startup, real estate, and many others.
                  </p>

                  <h5>What you’ll do</h5>
                  <p>Areas you could work on:</p>
                  <ul>
                    <li>
                      Work as a User Interface Designer for our B2B SaaS product
                      along with stakeholders
                    </li>
                    <li>
                      Translate client briefs into a clear, user-friendly
                      interface design and interactions. Develop both low and
                      high-fidelity mockups.
                    </li>
                    <li>
                      Testing out design assumptions and usability level of your
                      design. Validate your design decisions through user
                      feedback, iterate your designs based on this feedback, and
                      meticulously document the process.
                    </li>
                    <li>
                      Work closely with a team of project managers, client
                      stakeholders, researchers, and content designers.
                    </li>
                    <li>Conduct user research and evaluate user feedback</li>
                  </ul>

                  <h5>Requirements:</h5>
                  <ul>
                    <li>
                      A mid level product designer with min. 3 years of
                      experience.
                    </li>
                    <li>
                      A designer with a strong UX and UI portfolio that
                      demonstrates problem-solving skills, design methods, and
                      craftsmanship.
                    </li>
                    <li>
                      An organized designer that always documents their works,
                      Figma files, and research reports.
                    </li>
                    <li>
                      Comfortable with fast-paced work environments, and excited
                      to drive the projects forwards.
                    </li>
                    <li>
                      Able to explain your design process, outcomes, and
                      decisions you’ve made.
                    </li>
                  </ul>
                </div>
                <div id="candidates" className="tab-pane fade">
                  <p>Candidate information goes here.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 align-content-center ">
            <div className="card card-profile">
              <div className="card-body">
                <p>
                  Active Until:
                  <br />
                  <strong>Jan 31, 2024</strong>
                </p>
                <hr />
                <p>
                  Department Type:
                  <br />
                  <strong>Design</strong>
                </p>
                <hr />
                <p>
                  Job Type
                  <br />
                  <strong>Fulltime</strong>
                </p>
                <hr />
                <p>
                  Location
                  <br />
                  <strong>Onsite Indonesia, Jakarta</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDescription;
