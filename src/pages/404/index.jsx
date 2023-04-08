import AuthLayout from "@/components/layouts/AuthLayout"
import Link from "next/link"

const NotFound = () => {
  return (
    <div>
      <h2 className="text-slate-800 dark:text-slate-100">
        <span className="text-xl text-red-600">404</span> | Page was not found
      </h2>
      <Link
        href="/"
        className="text-slate-600 dark:text-blue-300 dark:hover:text-blue-400"
      >
        Go back to home page
      </Link>
    </div>
  )
}

export default NotFound

NotFound.getLayout = (page) => <AuthLayout>{page}</AuthLayout>
