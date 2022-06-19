//file: src/components/ShowNote.js
import React, { useState } from "react";
import "./ShowNote.css";
import { connect } from "react-redux";
import { actEditNote, actRemoveNote } from "../actions/index";

function ShowNote(props) {
  const [noteContent, setNoteContent] = useState(props.noteData.content)

  //Lấy ID của ghi chú 
  const noteID = props.noteData.id


  // Được gọi mỗi khi thay đổi giá trị
  // của ghi chú.
  const handleChange = (e) => {
    setNoteContent(e.target.value)
    props.editNote(noteID, e.target.value)
  }

  //Được gọi khi click vào 
  //xóa ghi chú.
  const handleRemoveNote = () => {
    props.removeNote(noteID)
  }
  return (
    <div className="col-md-4" style={{marginTop: 10}}>
      <div className="card bg-warning">
        <div className="card-body" style={{ height: 200 }}>
          <textarea value= {noteContent} onChange = {handleChange}></textarea>
        </div>
        <div className="card-footer">
          <button className="btn btn-danger btn-sm float-right" onClick={handleRemoveNote}>Xóa</button>
        </div>
      </div>
    </div>
  );
}

// chuyển dispatch thành props
const mapDispatchToProps = (dispatch) => {
  return {
    editNote: (id, content) => {
      dispatch(actEditNote(id, content));
    },
    removeNote: id => {
      dispatch(actRemoveNote(id));
    }
  };
};

// chuyển state từ store thành props
// của component
const mapStateToProps = (state, ownProps) => {
  return {
    note: state.note,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowNote);