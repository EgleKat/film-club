import { PrismaClient } from '@prisma/client';
import useSWR from 'swr';
import Layout from '../../components/layout';


interface ProfileProps {
  account: {
    username: string,
    id: number,
  }
}

export default function Profile(props: ProfileProps) {
  console.log(props)
  return (
    <Layout>
      {props.account.username}
    </Layout >
  );
}

const prisma = new PrismaClient();
export async function getStaticProps(context: any) {
  const { username } = context.params;
  console.log(username)
  const account = await prisma.accounts.findUnique({ where: { username: username } });
  return {
    props: {
      account
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}