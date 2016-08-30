/* http://codepen.io/BrianDGLS/pen/bZAwEY */
var SpaceDemo = (function () {
  function SpaceDemo () {
    this.fov = 1250
    this.w = window.innerWidth
    this.h = window.innerHeight
    this.starCount = 100
    this.canvas = document.getElementById('demo')
    this.ctx = this.canvas.getContext('2d')
    this.stars = []
  }
  SpaceDemo.prototype.main = function () {
    this.canvas.width = this.w
    this.canvas.height = this.h
    this.init()
    this.run()
  }
  SpaceDemo.prototype.init = function () {
    for (var i = 0; i < this.starCount; i++) {
      var seed = function () { return (Math.random() * 400) - 200 }
      var point = [seed(), seed(), seed()]
      this.stars.push(point)
    }
  }
  SpaceDemo.prototype.render = function (point3d) {
    var x3d = point3d[0]
    var y3d = point3d[1]
    var z3d = point3d[2]
    var scale = this.fov / (this.fov + z3d)
    var x2d = (x3d * scale) + (this.w / 2)
    var y2d = (y3d * scale) + (this.h / 2)
    this.ctx.lineWidth = scale
    this.ctx.strokeStyle = 'rgb(255,255,255)'
    this.ctx.beginPath()
    this.ctx.moveTo(x2d, y2d)
    this.ctx.lineTo(x2d + scale, y2d)
    this.ctx.stroke()
  }
  SpaceDemo.prototype.run = function () {
    window.requestAnimationFrame(this.run.bind(this))
    this.ctx.fillStyle = 'rgb(0,0,0)'
    this.ctx.fillRect(0, 0, this.w, this.h)
    for (var i = 0; i < this.starCount; i++) {
      var point3d = this.stars[i]
      var z3d = point3d[2]
      z3d -= 4
      if (z3d < -this.fov) {
        z3d += 400
      }
      point3d[2] = z3d
      this.render(point3d)
    }
  }
  return SpaceDemo
}())

export default SpaceDemo
