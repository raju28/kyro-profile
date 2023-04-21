import React from 'react';

export default function PreviewHeader() {
    return (
			<>
				<button className='btn-red add-project'>+ Add Project</button>
				<div className='profile-avatar-container'>
					<div className='preview-pic'>
						<img src="https://xsgames.co/randomusers/assets/avatars/male/70.jpg" alt="" className='thumb'/>
					</div>
					<div className='profile-detail'>
						<div className='user-name'>Adam</div>
						<div className='user-desg'>Product Manager</div>
					</div>
				</div>
			</>
    )
}