import Dot from './assets/dot.png'
import './article.css'
import Author from './assets/author.png'
import Date from './assets/date.png'
import Eye from './assets/eye-3-128.png'

function Article(props){

    function handleCheckboxChange(event){
        if(event.target.checked){
            props.setItemRemoved([...props.itemRemoved, props.id])
        }
        else{
            props.setItemRemoved(
            props.itemRemoved.filter(
                (item) => item != props.id
            )
            )
        }
    }

    function handleReadfull(){
        props.setModalCurrentArticle({author:props.author, title:props.title, id:props.id, content:props.content, date:props.date})
        props.setToggle(!props.toggle)
        console.log(props.modalCurrentArticle)
        console.log("handlereadfull")
    }

    return(
        
        <div id={props.id} className='article'>
            <img src={Dot} className='dot'/>
            <input type='checkbox' onChange={handleCheckboxChange}/>
            <div className='article-left-sec'>
                <p className='title'>{props.title}</p>
                <div>
                    <img src={Author} className='author-icon'/> <span id='author-name'>{props.author}</span>
                    <img src={Date} className='date-icon'/> <span>{props.date}</span>
                </div>
                
                <p className='content'>{props.content}
                </p> 
                <div className='read-full-container'>
                    <img src={Eye} className='eye-icon'/>
                    <span onClick={handleReadfull}>Read Full</span>
                </div>
            </div>

            <div className='article-right-sec'>
                <button type='button'>Sports</button>
                <button type='button'>Worldwide</button>
                <button type='button'>Local</button>
            </div>
        </div>
        
    )
}

export default Article