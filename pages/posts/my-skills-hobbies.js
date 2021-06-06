import Head from 'next/head';
import Link from 'next/Link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
  <Layout>
    <Head>
      <title>Rufus's Skills & Hobbies</title>
    </Head>
    <h1>My Skills & Hobbies</h1>
      <div class="about copy-container">
        <h2>Likes</h2>
        <ul>
          <li>Finding that perfect spot of sun to sleep in</li>
          <li>Visiting with neighbours</li>
          <li>Bird-watching</li>
          <li>Feeding time!</li>
          <li>Playing chasey in the hallway</li>
        </ul>
      </div>
      <div class="about copy-container">
        <h2>Dislikes</h2>
        <ul>
          <li>Arch-enemy bear: Tries to drown him almost every day</li>
          <li>Getting his teeth brushed</li>
          <li>The motion of the car on the move</li>
          <li>Spray-bottle</li>
          <li>Prickly plants! (ie. cacti)</li>
        </ul>
      </div>
      <div class="about copy-container">
        <h2>Special Skills</h2>
        <ul>
          <li>Using the toilet</li>
          <li>Playing fetch!</li>
          <li>Chirping like a bird</li>
          <li>Winning over the hearts of those he meets</li>
          <li>Balancing on Randy's shoulders</li>
        </ul>
      </div>
    </Layout>
  )
}