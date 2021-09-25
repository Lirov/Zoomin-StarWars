
const FilmInfo = (props) => {

  return (
    <>
    <td>
        {props.items.length > 0 ?
          <ul>
            {props.items.map((name, index) => (<li key={index}>{name}</li>))}
          </ul>
            :
          <div>loading...</div>}
    </td>
    </>
  );
}

export default FilmInfo