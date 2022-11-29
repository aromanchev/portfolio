import { Card } from "../../components";
import styles from "./projects.module.scss";

export const Projects = () => (
  <div className={styles.projects}>
    <h3>Projects</h3>
    <Card
      href="https://github.com/aromanchev/smiley"
      src="/smiley.png"
      alt="Smiley App"
      title="Smiley dApp"
      stack="React • Solidity • ERC721 • ERC1155"
      year="2022"
      description="DApp to sell NFTs that I drew myself. Through it you can make mint and sell NFTs, see the documentation at the link for more details"
    />
    <Card
      href="https://gunglisound.site/"
      src="/gungli.png"
      alt="Gungli Sound"
      title="Gungli Studio Site"
      stack="Next • SCSS • TypeScript"
      year="2022"
      description="Recording studio website. "
    />
  </div>
);
