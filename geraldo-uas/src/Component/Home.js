import React, { Component } from 'react';
import './Home.css';
import Note from './Note';
import NoteForm from './NoteForm';
import Firebase from '../firebase/config';
import 'firebase/database';

class App extends Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    this.app = Firebase;
    this.database = this.app.database().ref().child('notes');

    this.state = {
      notes: [],
    };
  }

  componentWillMount() {
    const previousNotes = this.state.notes;

    this.database.on('child_added', (snap) => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
      });

      this.setState({
        notes: previousNotes,
      });
    });

    this.database.on('child_removed', (snap) => {
      for (var i = 0; i < previousNotes.length; i++) {
        if (previousNotes[i].id === snap.key) {
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        notes: previousNotes,
      });
    });
  }

  addNote(note) {
    this.database.push().set({ noteContent: note });
  }

  removeNote(noteId) {
    this.database.child(noteId).remove();
  }

  render() {
    return (
      <div className='notesWrapper'>
        <div className='notesHeader'>
          <div>Comic Stream</div>
        </div>
        <section className='full-section'>
          <div class='w-80'>
            <div>
              <div>
                <iframe
                  className='ytVid'
                  width='420'
                  height='315'


                  src='https://www.youtube.com/embed/W1HYX_yRgrg'
                  
                  frameborder='0'
                  allowfullscreen></iframe>
              </div>
              <div>
                <iframe
                  className='ytPlaylist'
                  width='420'
                  height='315'
                  src='https://www.youtube.com/embed/J2MSgn6MQcQ'
                  frameborder='0'
                  allowfullscreen></iframe>
                <iframe
                  className='ytPlaylist'
                  width='420'
                  height='315'
                  src='https://www.youtube.com/embed/kkTox8LhLI0'
                  frameborder='0'
                  allowfullscreen></iframe>
                <iframe
                  className='ytPlaylist'
                  width='420'
                  height='315'
                  src='https://www.youtube.com/embed/JF2ANIVdF3Q'
                  frameborder='0'
                  allowfullscreen></iframe>
                <iframe
                  className='ytPlaylist'
                  width='420'
                  height='315'
                  src='https://www.youtube.com/embed/ogqcDNJ_KGs'
                  frameborder='0'
                  allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div class='w-20'>
            <div className='notesFooter'>
              <NoteForm addNote={this.addNote} />

              <div className='notesBody'>
                {this.state.notes.map((note) => {
                  return (
                    <Note
                      noteContent={note.noteContent}
                      noteId={note.id}
                      key={note.id}
                      removeNote={this.removeNote}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
