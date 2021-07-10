import { MdError } from 'react-icons/md';

const Message = (props) => {
    return (
        <div className="py-4 border-0 rounded relative mx-2 sm:mx-0 my-7 border text-center text-mv-main">
          <span className="text-xl inline-block mr-5 align-middle">
            <MdError role="img" focusable="false" aria-labelledby="message" title="warning" />
          </span>
          <div className="inline-block align-middle mr-8" id="message">
            {props.message}
          </div>
        </div>
    );
};

export default Message;