import './modal.css'

function Modal(props){

    function handlePopupClick(){
        props.setModalCurrentArticle()
        props.setToggle(!props.toggle)
    }

    return(
        <>
            <div className="popup">
                <div className="overlay" onClick={handlePopupClick}>
                </div>
                <div className="modal-content">
                    <div className="titleAndClose-container">
                        <p>{props.modalCurrentArticle.title}</p>
                        <button onClick={handlePopupClick}>X</button>
                    </div>
                    <p className='authorAndDate'>{props.modalCurrentArticle.author}| {props.modalCurrentArticle.date}</p>
                    <div className='modal-content-content'>
                        {props.modalCurrentArticle.content}
                    </div>
                    <div className='publishAndDelete-btn-container'>
                        <button type='button' id='publish'>Publish</button>
                        <button type='button' id='delete'>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal