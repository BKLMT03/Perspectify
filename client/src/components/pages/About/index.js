import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.css";

function About() {
  return (
    <Container className="about">
      <Row>
        <hr />
        <h3 className="stretch">per &#183; SPEK &#183; ti &#183; fy</h3>
        <span className="definition">VERB: </span>
        <p className="definition">
          To put something into a wider, deeper perspective.
        </p>
        <hr />
      </Row>
      <Row>
        <section>
          A wise person has said that the most important trait in the 21st
          century is <strong>intense curiosity</strong>. Curiosity allows you to
          progress. It helps you create and realize personal goals; it
          encourages progress and personal re-invention.
        </section>
        <br />
        <section>
          More and more, algorithms are ru(i/n)ning our lives. Our interests and
          worldviews are being manipulated. We are being shielded from
          experiences and ideas that may make us uncomfortable.
        </section>
        <br />
        <section>
          <strong>Perspectify</strong> helps you rise above the algorithm and
          jostle your comfort so you can better develop your own ideas and form
          your own well-informed opinions on current events.
        </section>
        <br />
        <br />
        <h3 className="stretch mt-4">How To Perspectify</h3>
        <br />
        <section>
          We provide you with some recent hot topics to choose from or you can
          look up your own. We'll show you a collection of reporting on your
          chosen topic from several different perspectives*.
        </section>
        <br />
        <section>
          Once you sign up, you'll be able to use your deeper knowledge to have
          meaningful discussions with other Perspectified minds. You'll also
          have a profile page that will keep score&#8273; of how curious you've
          been and allow you to save articles for later.
        </section>
        <br />
        <section>It is simple to Perspectify.</section>
      </Row>
      <hr />
      <Row>
        <section className="disclaimer">
          *We carefully curated media sources for our articles based on where
          they fell on the{" "}
          <a href="https://www.adfontesmedia.com/static-mbc/">
            Media Bias Chart 7.0
          </a>{" "}
          published by{" "}
          <a href="https://www.adfontesmedia.com">Ad Fontes Media</a> for US
          sources and{" "}
          <a href="https://mediabiasfactcheck.com/" target="_blank">
            Media Bias/Fact Check
          </a>{" "}
          for Canadian Sources. The intention is to provide a range of centrist,
          liberal, and conservative points of view based on North American
          political ideologies on chosen topics. We cannot guarantee users will
          be presented a perfectly balanced set of results. It is always best to
          check sources, and if something doesn't feel right, dive deeper.{" "}
        </section>
        <section className="disclaimer">
          &#8273; We devised a scoring system based on where our sources fall on
          the{" "}
          <a href="https://www.adfontesmedia.com/static-mbc/">
            Media Bias Chart 7.0
          </a>{" "}
          published by{" "}
          <a href="https://www.adfontesmedia.com">Ad Fontes Media</a> for US
          sources and{" "}
          <a href="https://mediabiasfactcheck.com/" target="_blank">
            Media Bias/Fact Check
          </a>{" "}
          for Canadian Sources. The goal is to show users whether they exposed
          themselves to a balanced set of opinions based on North American
          politial ideologies, but does not purport to represent an assessment
          of the user's actual personal ideological leanings.
        </section>
      </Row>
    </Container>
  );
}
export default About;
