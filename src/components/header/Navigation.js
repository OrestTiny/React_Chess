function Navigation(props) {
  const listItem = props.navData;
  const listItemHtml = listItem.map(item => <div><a href="{item.link}">{item.name}</a></div>)
  return (
    <div className='navigation'>
      {listItemHtml}
    </div>
  )
}

export default Navigation