// import your client component
import Counter from './Counter';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import Date from '../../components/date';
// v9 compat packages are API compatible with v8 code


export default async function Page() {

  return (
    <div>
      <Counter />
    </div>
  );
}
