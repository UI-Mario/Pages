// DOM
const addList = item => {
  const table = document.getElementById('pro-table')
  let str = ``
  str += `<tr>
            <td class="name">${item.name}</td>
            <td><div class="twoline" id="desc${item.id}" >${item.description}</div></td>
            <td>${item.endTime}</td>
            <td class="${item.status}">${item.status}</td>
            <td><button type="button" id="delete${item.id}">删除</button></td>
          </tr>`
  table.innerHTML += str
}

const renderList = data => {
  data.map(item => {
    addList(item)
  })
  const up = document.getElementById('up')
  // const down = document.getElementById('down')
  up.setAttribute('style', 'color: #3080EF')
  // down.setAttribute('style', 'color: none')
}

const renderCard = data => {
  let activeCount = (pendingCount = closedCount = 0)
  let sum = data.length
  data.map((item, index) => {
    if (item.status === 'ACTIVE') {
      activeCount += 1
    }
    if (item.status === 'PENDING') {
      pendingCount += 1
    }
    if (item.status === 'CLOSED') {
      closedCount += 1
    }
  })

  document.getElementById('pending-count').innerHTML = pendingCount
  document.getElementById('active-count').innerHTML = activeCount
  document.getElementById('finished-count').innerHTML = closedCount
  document.getElementById('all-count').innerHTML = sum
  document.getElementById('pending-percent').innerHTML =
    pendingCount === 0 ? `0%` : `${Math.round((pendingCount / sum) * 100)}%`
  document.getElementById('active-percent').innerHTML =
    activeCount === 0 ? `0%` : `${Math.round((activeCount / sum) * 100)}%`
  document.getElementById('finished-percent').innerHTML =
    closedCount === 0 ? `0%` : `${Math.round((closedCount / sum) * 100)}%`
}

const mouseEvent = () => {
  const table = document.getElementById('pro-table')
  let temp = null
  table.onclick = event => {
    const target = event.target
    if (target.type === 'button') {
      callAlertBox()
      temp = target.id.slice(6)
    }
  }
  table.onmouseover = event => {
    const target = event.target
    if (target.className === 'twoline') {
      target.className = 'disTwoLine'
    }
  }
  table.onmouseout = event => {
    const target = event.target
    if (target.className === 'disTwoLine') {
      target.className = 'twoline'
    }
  }
  const alertbox = document.getElementsByClassName('alertbox')[0]
  alertbox.onclick = event => {
    const target = event.target
    if (target.id === 'confirm') {
      deleteData(temp)
      setTimeout('getData()', 1000)
      setTimeout('offAlertBox()', 1000)
    }
    if (target.id === 'cancel' || target.className === 'iconfont close-icon') {
      temp = null
      offAlertBox()
    }
  }

  const search = document.getElementById('search')
  search.onclick = event => {
    const target = event.target
    const str = document.getElementById('search-box-id').value
    if (target.id === 'search-img') {
      console.log('yes')
      axios.get('http://localhost:3000/projects').then(
        response => {
          clearNode()
          let tempData = searchData(str, response.data)
          renderCard(tempData)
          renderList(tempData)
        },
        response => {
          console.log('error')
        }
      )
    }
  }
}

const searchData = (str, data) => {
  let res = data.filter(item => {
    return item.name.indexOf(str) !== -1
  })
  return res
}

const sotrUpClick = () => {
  console.log('yes')
  axios.get('http://localhost:3000/projects').then(
    response => {
      clearNode()
      let tempData = sortUp(response.data)
      renderCard(tempData)
      renderList(tempData)
      const up = document.getElementById('up')
      const down = document.getElementById('down')
      up.setAttribute('style', 'color: #3080EF')
      down.setAttribute('style', 'color: none')
    },
    response => {
      console.log('error')
    }
  )
}

const sotrDownClick = () => {
  console.log('no')
  const down = document.getElementById('down')
  const up = document.getElementById('up')
  axios.get('http://localhost:3000/projects').then(
    response => {
      clearNode()
      let tempData = sortDown(response.data)
      renderCard(tempData)
      renderList(tempData)
      const up = document.getElementById('up')
      const down = document.getElementById('down')
      up.setAttribute('style', 'color: none')
      down.setAttribute('style', 'color: #3080EF')
    },
    response => {
      console.log('error')
    }
  )
}

const sortUp = data => {
  for (var i = 0; i < data.length; i++) {
    for (var j = i; j < data.length; j++) {
      if (data[i].endTime > data[j].endTime) {
        let temp = data[i]
        data[i] = data[j]
        data[j] = temp
      }
    }
  }
  return data
}

const sortDown = data => {
  for (var i = 0; i < data.length; i++) {
    for (var j = i; j < data.length; j++) {
      if (data[i].endTime < data[j].endTime) {
        let temp = data[i]
        data[i] = data[j]
        data[j] = temp
      }
    }
  }
  return data
}

const clearNode = () => {
  const table = document.getElementById('pro-table')
  table.innerHTML = `<tr>
  <th class="pro-name">项目名称</th>
  <th class="pro-des"><p>项目描述</p></th>
  <th class="pro-endtime">
    <span>截止时间</span>
    <span class="iconfont" id="up" onclick="sotrUpClick()">&#xe645</span>
    <span class="iconfont" id="down" onclick="sotrDownClick()">&#xe62a</span>
  </th>
  <th class="pro-status">状态</th>
  <th class="pro-operate">操作</th>
</tr>`
}

const callAlertBox = () => {
  const alertbox = document.getElementsByClassName('alertbox')[0]
  const canvas = document.getElementsByClassName('canvas')[0]
  alertbox.setAttribute('style', 'display: block')
  canvas.setAttribute('style', 'display: block')
}

const offAlertBox = () => {
  const alertbox = document.getElementsByClassName('alertbox')[0]
  const canvas = document.getElementsByClassName('canvas')[0]
  alertbox.setAttribute('style', 'display: none')
  canvas.setAttribute('style', 'display: none')
}

// network
const getData = () => {
  axios.get('http://localhost:3000/projects').then(
    response => {
      clearNode()
      renderCard(response.data)
      renderList(response.data)
      console.log(response.data[0].name)
    },
    response => {
      console.log('error')
    }
  )
}

const deleteData = id => {
  axios.delete(`http://localhost:3000/projects/${id}`).then(
    res => {
      console.log(`delete id:${id} success`)
    },
    res => {
      console.log(`delete id:${id} error`)
    }
  )
}

const addData = item => {
  axios.post('http://localhost:3000/projects/', item).then(
    res => {
      console.log(`add success`)
      // getData()
    },
    res => {
      console.log(`add error`)
    }
  )
}

const search = () => {}

// start
window.onload = function() {
  getData()
  mouseEvent()
}
