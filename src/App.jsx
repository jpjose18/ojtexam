
import './App.css'
import Article from './article.jsx'
import data from './MOCK_DATA.json'
import Modal from './modal.jsx'
import { useEffect, useState} from 'react'

function App() {

  const [articleData, setArticleData] = useState(data);
  const [itemRemoved, setItemRemoved] = useState([]);
  const [popup, setPopup] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [modalCurrentArticle, setModalCurrentArticle] = useState({})
  
  useEffect(
    () => {
      console.log(itemRemoved)
    },[itemRemoved]
  )

  useEffect(
    () => {
      toggle? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible";
    },[toggle]
  )

  function handleDelete(event){
    setArticleData(
      articleData.filter(
        (article) => 
          !itemRemoved.includes(article.id)
        )
    )
    setItemRemoved([])
  }

  console.log("rendered!")

  return (
    <>
      <div className='main'>

        <header>
          <h2>News Articles</h2>
        </header>

        <div className='second-header'>
          <input type='checkbox'/>
          <button type='button' id='publish'>Publish</button>
          <button type='button' id='delete' onClick={handleDelete}>Delete</button>
          <input type='text' placeholder='Search...'/>
        </div>

        <div className='articles-container'>
        {
          articleData.map(
            (article) => 
              <Article 
               id={article.id}
               author={article.author}
               title={article.title}
               content={article.content}
               toggle={toggle}
               setToggle={setToggle}
               modalCurrentArticle={modalCurrentArticle}
               setModalCurrentArticle={setModalCurrentArticle}
               date={article.date}
               key={article.id}
               itemRemoved={itemRemoved}
               setItemRemoved={setItemRemoved}
              />
            
          )
        }
        </div>
        {
        toggle &&
        <Modal
         toggle={toggle}
         setToggle={setToggle}
         modalCurrentArticle={modalCurrentArticle}
         setModalCurrentArticle={setModalCurrentArticle}
        />
        }

      </div>
    </>
  )
}

export default App
