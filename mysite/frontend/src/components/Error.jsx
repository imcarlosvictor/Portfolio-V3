import { useNavigate } from 'react-router-dom';


export default function Project() {
  const createErrorPage = () => {
    return (
      <>
        <div className="noise-bg"></div>
        <p>Error</p>
      </>
    )
    

  }

  return (
    <>
      { createErrorPage() };
    </>
  )
}
