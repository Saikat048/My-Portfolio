// import { useParams } from 'react-router-dom';

const Projectdetail = ({ image }) => {
    // const {projectdetail} = useParams();
    // console.log(projectdetail) 

    return (
        <div className='flex justify-center mt-16'>
            <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://i.ibb.co/LN2FHxF/img1.png" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="text-2xl font-bold">
                C&A Hardware Tools 
                </h2>
                <p className="text-xl font-bold">Feature</p>
                <p>*  This is a hand tools related responsive website</p>
                <p>*  The website has a logging/signup system. Users will not be able to see the main features without logging/signing up</p>
                <p>*  After logging/Singing up user can order tools then go to dashboard route and see his orders.</p>
                <p>*  User can delete orders, pay for ordered tools, and update their profiles.</p>
                <p className="text-xl font-bold">Technology</p>
                <p>*  Tailwind, DaisyUI, Firebase, React-Firebase-Hooks, React-Hook-Form, React-Icons, Tailwind-Loader-Spinner, React-Router, React-Toastify, etc.</p>
            </div>
        </div>
        </div>
    );
};

export default Projectdetail;