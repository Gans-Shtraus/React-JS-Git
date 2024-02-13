import React from "react";
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className= {classes.content}>
        <div>
          <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
        </div>
        <div className={classes.avatar}>
          Ava + descriptions
          <img src="" />
        </div>
        <div className = {classes.posts}>
          <p className = {`${classes.posts} ${classes.about}`}>Мои посты</p>
          </div>

        <div>

          <button className= {`${classes.button} ${classes.newPost}`}>new post</button>
          
          </div>

        <div className = {classes.item}>post 1</div>
        
        <div className = {classes.item}>post 2</div>
      </div>
    )
}
export default Profile;