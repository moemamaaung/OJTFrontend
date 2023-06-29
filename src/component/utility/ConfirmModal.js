import style from './ConfirmModal.module.css'

function ConfirmModal(props){
    // const modal = `${style.modal}`
    function onCancel(){
        props.onCancel();
    }

    function onConfirm(){
        props.onConfirm();
    }

    const buttonClasses = style.btn+' '+style['btn--alt']

    return (
        <div className={style.modal}>
            <h6 className={style.text}>Are you sure want to delete?</h6>
            <div className='row'>
            <div className='col-md-5'>
            <button className={buttonClasses} onClick={onCancel}>Cancel</button>
            </div>
            <div className='ms-3 col-md-5'>
            <button className={style.btn} onClick={onConfirm}>Confirm</button>
            </div>
          
           
            </div>
        </div>
    );
}

export default ConfirmModal