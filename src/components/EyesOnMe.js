// Code EyesOnMe Component Here
export default function EyesOnMe (e) {
    
    return (
    <button onFocus={e => console.log('Good!')} onBlur={e => console.log('Hey! Eyes on me!')}>Eyes on me</button>
  )
}


