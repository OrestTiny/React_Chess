function Navigation(props) {
  const listItem = props.navData;
  const listItemHtml = listItem.map(item => <div key={item.name}><a href="{item.link}">{item.name}</a></div>)

  return (
    <div className='navigation'>
      {listItemHtml}
    </div>
  )
}

export default Navigation