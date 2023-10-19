import PageTitle from '../components/Global/PageTitle/PageTitle'

// Server error
export default function Custom500() {
  return <PageTitle title="500" body="Server-side error occurred" />
}
