import Link from "next/link";


const VerticalLine = () => {
    return (
      <div style={{
        border: '1px solid #a3a2a2', // Border style
        borderLeft: '2px', // Width and color of the line
        height: '30px',               // Height of the line
        marginLeft: '10px',            // Optional: margin to adjust the positioning
      }}></div>
    );
  };





const NavLink = ({href , title}) => {

    let active = 'p-2 px-3 text-base font-semibold hover:bg-[#f4f4f4] rounded-lg';
    let line_class = 'hidden';
    if( title == 'Resources'){
        line_class = 'flex';
    }
    console.log({title});
    if(title == 'Start for Free'){
        active = 'p-2 px-3 text-base font-semibold bg-[#f65261] text-white rounded-lg';
        console.log('active');
    }   

    return(

    <Link href={href} className='pl-3 pr-4 sm:text-xl md:p-0  flex items-center'>
                    <div  className={active}>
                            {title}
                    </div>
                    <div className={line_class}>
                        <VerticalLine/>
                    </div>
    </Link>

    );
}

export default NavLink;