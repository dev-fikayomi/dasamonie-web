
  import { Link } from 'react-router-dom'
  export default function NotFound(){
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <p className="text-8xl font-black text-brand">404</p>
          <p className="mt-2 text-slate-600">Oops, the page you’re looking for doesn’t exist.</p>
          <Link to="/" className="btn btn-primary mt-6">Go Home</Link>
        </div>
      </div>
    )
  }
