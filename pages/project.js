import Layout from "../components/Layout";
import Project from "../components/Project";
import { connectToDatabase } from "../util/mongodb";

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}

export default function Index({ isConnected }) {
  return (
    <Layout>
      <Project />
      {isConnected ? (
        <p>You are connected to MongoDB</p>
      ) : (
        <p>You are NOT connected to MongoDB.</p>
      )}
    </Layout>
  );
}
