function ContainerItem({
  style={},
  children
}) {
  return (
    <div style={style} className="container-item">
      {children}
    </div>
  );
}

export default ContainerItem
