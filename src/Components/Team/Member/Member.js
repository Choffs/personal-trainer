import './Member.scss';

const Member =(props)=>{
    
    const memberName = props.memberName || 'Berry Smith';
    const memberTitle = props.memberTitle || 'Personal Trainer';
    const memberDescription = props.memberDescription || 'Description';
    const memberImage = props.memberImage || null;
    const reversed = props.reversed || false;
     
    return (
        <div className={`member d-flex p-rel f-center ${(reversed) && 'reversed'}`}>
            <div className="member-img" style={(memberImage !== null) ? {backgroundImage: `url(${memberImage})`} : {}}>
            </div>
            <div className="member-body d-flex f-column">
                <div className="member-title p-rel">
                    <h2 className='text-light header-text'>{memberName}</h2>
                    <h3 className='text-light header-text secondary'>{memberTitle}</h3>
                </div>
                <p className='primary-text'>{memberDescription}</p>
            </div>
        </div>
    )
}
export default Member;