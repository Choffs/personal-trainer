import Member from "./Member/Member";
import './Team.scss';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor nisi, dolor nunc ut sed eget vel aliquam sit. Tortor tortor eget id fusce id. Risus sed lectus massa nisl. Id mi pellentesque lacinia elementum aliquam accumsan convallis tempor.'
const TEAM_DATA = [
    {memberName: 'Berry Smith',
    memberTitle: 'Personal Trainer',
    memberDescription: lorem,
    memberImage: 'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'    
    },
    {
    memberName: 'Susan Smith',
    memberTitle: 'Fitness Trainer/ Yoga Instuctor',
    memberDescription: lorem,
    memberImage: 'https://images.unsplash.com/photo-1533681717801-1bbd2ec8d269?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'    
    }
]


const Team = ()=>{
    const getTeam = ()=>{
        return TEAM_DATA.map((member, idx)=>{
            return <Member key={idx} memberName={member.memberName} memberTitle={member.memberTitle} memberDescription={member.memberDescription} memberImage={member.memberImage} reversed={!(idx % 2 === 0)} />
        })
    }
    return (
        <div id='team-page' className="team d-flex f-column g-5 dark-mode">
            <h2 className='team-title'>Meet The Team</h2>
            <div className="member-container d-flex f-column">
               {getTeam()}
            </div>
        </div>
    )
}
export default Team;