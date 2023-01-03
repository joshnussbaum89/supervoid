import PageTitle from '../components/Global/PageTitle/PageTitle'

// Server error - copy handled by Header component
export default function Custom500() {
  return <PageTitle title="500" body="Server-side error occurred" />
}
