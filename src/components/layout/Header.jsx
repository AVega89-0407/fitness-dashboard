import Greeting from '../Greeting';

export default function Header() {

          function showDate() {
    let today = new Date();
    
    return today.toLocaleDateString("sv-SE", {
        weekday: "long", 
        day: "numeric", 
        month: "long", 
    });
  }

    return (
        <header className='flex flex-col p-6'>
            <Greeting />
            <p className='text-sm'>{showDate()} · Håll kvar tempot, du är nära ditt veckamål!</p>
        </header>
    )
}