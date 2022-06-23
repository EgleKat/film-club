import Layout from '../../components/layout';
import { PrismaClient } from '@prisma/client';
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
const prisma = new PrismaClient()



export default function ({ accounts = [] }: any) {

  const userList = accounts.map((a: { id: Key | null | undefined; username: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) =>
    <li key={a.id} >
      {a.username}
    </li >
  );
  return (
    <Layout>
      All users123
      <ul>
        {userList}
      </ul>
    </Layout >
  );
}



export async function getStaticProps() {
  const accounts = await prisma.accounts.findMany();
  return {
    props: { accounts: JSON.parse(JSON.stringify(accounts)) },
    revalidate: 5
  }
} 