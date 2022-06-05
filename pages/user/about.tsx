import useSWR from 'swr';
import Layout from '../../components/layout';


export default function Profile() {
  const { data, error } = useSWR('/api/user', fetch);
  const loadingOrError = error
    ? <div>failed to load</div>
    : !data
      ? < div > loading...</div>
      : null;
  console.log(data, error)
  console.log('bob1')
  return (
    <Layout>
      {/* <div>{data}</div>
      {
        !loadingOrError &&
        data?.name
      } */}
    </Layout >
  );
}
