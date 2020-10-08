// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

class Hello extends Component {
  constructor(props){
    super(props);

    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    // TODO: change the state
    this.setState({
      clicked: !this.state.clicked
    });
  }
  // build and return HTML
  render(){
    return (
      <div className={ this.state.clicked ? 'clicked' : null }
      onClick={ this.handleClick}>
        Hello {this.props.name}
      </div>
    )
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="Amy" />, root);
}
