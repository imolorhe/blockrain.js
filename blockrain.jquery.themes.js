/**
 * Themes. You can add more custom themes to this object.
 */
var BlockrainThemes = {
  'candy': {
    background: '#040304',
    backgroundGrid: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAABcVBMVEUZGRkaGhobGxsAAAAcHBwBAQECAgIZGhwLCwsYGBgZGxYXFxcGBgYZGh8ZGh4aGhwZGxoWFhYeHh4bGRwdHR0HBwcaGxYFBQUDAwMeGRYZHBMEBAQcHB4VFRUXGh8aGhgbGxkgGBYdGRgcGhsUFBQQEBAbGRoWHRYbGhYdGBwdGRYaGR4UGyEaGRcMDAwREhcgICAAAgcbGx0aHBkSFBEZGxgYGR0JCQkbGR4SEhIABAAfHx8XFxUBBAATFAwZGhQZHBUeGBgICAgAAAgQEBgDAwAUFAobGxMXGxoQEBIdGRogGBUHAgAYEw0eGxQeGhcZHBEZGSEHAAUYDxAeGhkWGyEWGx4WHBoGBggXHBYEAAcWDRIcFhYcGBcZGRcTHR4THhoUHhYXGxwCAwgBAAITDw4ZGBYWGx8SHB4SHRkTHRUWGxUACgYCBwMAAQAREg0FBwQKDRIJDRYHDxIJDw8KDwgNDggQDA0QCw8MCgsNDQ3RXB2UAAABG0lEQVR4XjWMU4+tQRRE9+7uj8ax7bFt27Zt3PvrpyeZsx6qkpVKARUFKlIqcCivqEBBoMHRqCw3cmQ5KHINITHPHETCQezDnCwC1eMuqSvmYzmueojjwB8OMCUKIjRrhDFGfsN1ma8LaJ4Bqa9Q0dAP2zMxX38qlbQtqZXwL1eHsfFOW41E1GkjYUqARPFDS5PZNrwcUSXDkBAJAz/0tneoaiCAXnc5UykQxlcDg0OBQ0TPK4+kww1INB0mJqdKWDWr3mx4jivkan5hcSlrrJhSslTJFAhRdFhdS69njY3NreKObSEhWhB29/YPIFE7Oj4pnkoWQjwEZ+cXl/ZV7frm9k6yYkBCFO4fHp+eX17f3j8+v77//ZcF4Qfd6yVhNO1A+QAAAABJRU5ErkJggg==',
    blocks: {
      line:     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAACuklEQVR4Xi2MzW4cRRSFz/2p6p4eT2zjjE2MHBQWvAALNjwDS8SOFc/FIyCxQgh2LFHkBQgJyQo/wXKCEZ7x9E9VV93LBPNJ516dxXfo/U8+HTZ9uzrZympTjLo4DbtDiBpXSBGMocI5lkaMhKv0fz+LVX9P6ZuvvxqBby+3L3eJu6Zt27DL4qgIWW0KsxPC3Kjxz5fPT3z48csvtHSHd0C/1374RddPX/9xK6JdcjEutNfqFJMBsQat3By+i/7VxqJ6c/zd5avvn1+N7dl2V9Ad92M2ViI2ksyWSJ2QXQXc5/H25jYcHHKl1YYebcJqw/rW03OOzfr89NHbR8vH3Wq9Olofrddni+XhycXJhBSkKFLxWeHBZFFDVyD343Rzc/0XeYSXeXZIJaam2V9pLsBOtRIKYAorXqvAg8giaKsCKw1zJAGFbKhwtxrdG9E3BQxAIW1xyYUKUIwNxMAwDEwuSgA5iAw2l5ITOeE/GLRMihIOsnQZnKqOlWXRUWidyYkFpCxtCF1s8D+seBggYVYRhChkqqjmld3NKhhu1XKuKUf4g6egEitkvqc5ewo+3ZOVZJO4Q4OSEDGRRyAQkYH8QfMUCR07KS8DIsO8xhjcnUXnSv4GMRYShSUG2MFCeby/awOJFyvF3TU22ckk3E3FQjci+mJVggwz12rKVEvWOk3dwWpIr7ezrU4XZ+9ciBAxWCVlhDb2o5cZTgBR17R3w45hgg8/fu+Dj643adZVXzCmebsbp5T6fhr2L9W8z5xLNsyDpl2btrsXPynS9NvVVc28xzMLPDCUYbVUMy+TMgdinupCEapdvPv0lqGwjW9fHsXjF39eIzRpnFbLdiy918qCWmclnq3mcWhVnzw5v+83XYz0+LPP/8lL704NB3BBdbCDKlChAq8QgRvmGSFouyo3vz7Lr/8FMHqie3VCpNQAAAAASUVORK5CYII=',
      square:   'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAACfUlEQVR4Xh3LvY5cRRBA4VNV3ffe+fEaZARgWfBExEhEZEg8A69AgkC8AzEiICMgJCdAxggsGRuW3Z3dmenbXVWskT6d7MiXnz3qclu87esm1qW3NteRuqaCIAmQABwPvPU2NyeaUa6P159/9QV3l/HqlWqN41El0PaadEJAoZBKqS9+eybL/tvvvi8PrHA4ku33pz9v5rafKmc0I7QhbiGaJSikyeCh1T7OG6fMluOvP/5+8csb+/RxhUtlEXA5KUMpiEpWwZKU3D799Zl1CtpEjsoh++HRxUMBVhgry4yUXLvstnE8qWi/HZndTEwpppj5XLIg7fZ4+fJlb91jzSlGhjc2O7RMj995nApRIRW0BHRl9UXLona6PYiGGKpaa50qPtQ96/5BCgkpBKghpI7VJZK5bmYju5IxQkZONqtbu+txd5ZEQFI0KaRRJxEZY0wjh/dqKqbZ/z9tqmJIqpQSnaD8T9sYkGqWmuTIZHgoWYupKh4SqSQimqrJfeV1gTECF4NKmUHwDFRqNSuJjMTxFQANNKGUyTBxYqSX6J6USdc1BquYFhEMFEQCUvSeC5rheL/Y74kAvX/OPXRZojIkqHkaLpMwWdYJm1fHlZIJotdXN7tFtczvvfuB5MIyRZwQ11pora2BTKOvva3zPKtStpsKLNNmmcr53xtFMtLaGLSR61IKKaPHenO1L2+qThqrn5FvPuGjjz8s4x+NI6Ptdvtxckywo0cjstZZZfZhNhSWNuoPP/5Udhebc8+tbp4//zPd6dcaGtJtWtUiVkhTWSJkTn3y5P15M19ervL1p9UZFzX9zHYmO1Ph3KFQK+rkIBMScbY7DicOzn+QRoW5iamqhgAAAABJRU5ErkJggg==',
      arrow:    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAACsklEQVR4XhWPu25bVxREZz/OuQ9RVKhXjBSu8gX5h+QD0udD8ilByjRpUqZxa6RxY8DuYlhwHhAc2qRIieK9vOfsvUMNBoPVrGLoh6+++7y7mbFfTNIVdShCxCGuAgE8tSilhOVWU6lrtPjPK33ffvvb6xd4KG9/+f1kenIYoAgOIc+AF9u5Rdteuvubty9LU168fqW9z7AFanr36uPZSOIgWHB1IJABKE0keSr3QdLolXitjw1n717++sfPP/7Ula6pfbYmeU7eaBybnzg6ewwpT8DW/vth2acFkzf9Pi0OOU1+/eVlM2/m14vZ+Rfz88t+Np+fnZ8tns1OL66vLss0FIughgppDumLzIpmYBrHz+uVsZVSsraorJoMQU5dOs3K3jaiSXGciNYoG3cQcbJjwiKC3Ny9ljhEEUlGBnh4IJwR+qQ6q7FbuMPBLEQCVjaYA0mYwcyIY6p5qYFQQqOexRMhHOqg6sV8mtiqQki51gSHV6YAMYMMxgIC2IOcBcIsQipBBCIjNqEQBWARjjAOHAtSh1eqk9bqLpBKQUSZE4ccIqpJFnWQiRSKypjUA1DgEDw5janNkgA4zKmGQtpgsNqhMoRCmRni4AgKJh6DB842TffENWWqU+m448eYje186GZT31nXo5EqPhUGIqoGwd1gtWFtRBeLxcXF1TydYh+td1E5lMdpOOxGr9bPOzdrtFGWk2lAg84e9/fYbGmsync0xD7mfkITgUMbJaKc26GOVn2sB61Gf958OE992wsoQjSSjBHUwEmlISTsxjEsOIsxP3v+/M3tey3wrRVh29wuA2Vo3Xoe3KP6Endhzh3v92NjKefcXZzETKxR+Sa+vt2s3/3z127YrYfN+mGz2m4+rT+tNuu77d3yfvn3+vbh8eH4bb3dLrer97c3q7L6H15gvODKB5u4AAAAAElFTkSuQmCC',
      rightHook:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAACqElEQVR4Xh3PO2tlZRSH8f9a73XvPTkTExl1dLAIKFpNY2Fl4UcT7G3FwmIaO3sbEfQjWAxDAkIORDHJyXFf3stayzC/9qke+ubrF0u7zqwfsJNFXEKtCAJriBGBoB0gNAZ5WIekcC0f+br8++3Pr1AP5Y/f6Xgfx4RqoB2kI27QgkYQw5BA2L95M+vTn379y0c2HI+Y5Ob6z3B/M/ZmlTieV7ISj9rXZ2n338NciEMedGshJacbZ9X16vK3H76vh/1paCOWiWvos5M1U9llLIebKeqz0zG4PmZ/dfl6XWc/9p4Ox/fMwnIcXrwL6ohPg54OZhYTUUc+w1YQ83z3kMadEKdp8EmE54cnKifTBLOr17cqtwIf4gAuKhUd8Lh4+TKPowjyOK1l8cxAm9nK2nWnsQeAyNtgldnClCLntkrRrTBcFyPjYRg8AEAY4JDhkhp7uOBIRbyqrmK+KcBm1qU30UbSxHcGnIGpKYk63dQxnC2sPcWo2slZUCCGYXPkkBnUqjcCSAGFsaOUQk5koqUqPFV5G2sDai+tG3vv6ZF3BojBzFrvpeij4KtDZTjPXTWGBA91uWJTo1WkqTAZoAbpT3ejd0YOBW1zoAHE/tG8FThm52KOLnDv1dA8DACTwbRU6TxSaX1WZII/1qBgwLvWtgN6ieQc2hC9hwLGTFS35eTJ7uOL5xxTkZI44l7BDGpwBke8FFCA9Pj2EAipHbd8Qre3fxOMDWykGryyM2Vv67JwmCJ7cQRRM6JXX+CrLz97/uHJ4bgHFUdKBi8B5gECLLAys4grAkr5Vt758ZdLTwhuPNvfHP7ZPzjrBAHYLBlChwPQ+jrtpq2UJv3i0/clni/Y03efYzxPvZdBkAzeAKATukENAoTA86ynZ3GrVQl3Eu/yJ/8D33mmeKR3Cz8AAAAASUVORK5CYII=',
      leftHook: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAACq0lEQVR4Xg3HO24mVRBH8X/Vrfv4ut02BjS8GSBAQuyCmE0gwSLICFgCBLASAhLiiQjQICFBMAMSFn63v+77qCp89EsO5U+/rus/0zQPPW8thXRQABLAjtHAAZ2gzGk2HRCG1YMPwgdf/fnXj1fX+O7732s/A0kzbwEUCW5Fgh8HGVdFTOn5H79NiZ/98rPATBVS8OzX5xTehYsxd3KFwXcGEljVOGVJ8a7W4Q4YT8sb33z70xdf/oB8HufzhjI0m2a3JLykuAyV4RGxrLVN5+f/3dxSKXJc59qfUk77djhdXhGx0/mMAg/rpm30bXq97Fp3su1mrMe19e46BLLw9Nb1w0WaZoO+fPmCNbTW3D1Fcjci77Cnn3wMhCBpWU7vuwqo3evgaar6QHRqfRXKhQiELFG1O6H3MZUyLpTIx24UMkNASbqZwZiN3AQsgKhZ6/VYR9OcDw/blg5xmKqPnIRBLQUZw4iIWQKydRcEcvLOOZ2A80Nv8SRv1iiHQWPXewbztm3MbObMYgpGCMwiwgwAIhJCAGBmjMD+KDJJThJzTI8TKZm5E9S7U3c0s6PrkVujvYbm0Qr1iceJ+GZ9772OMawNDNAgVm8cADcAQSgzCSiChZj8MRLwXCTPufQEC8SlVKPWNTJJ4BTDcds58tCaMsVoIQ8Nq2AgS97uVg2h7v29Dz86W86MGqB922F+djjsdbWE0eu233fbwF0opd57KYU43l5ewQ43N7d17CwUHJnlsl4QmUwkJJKZ5uXaLdBrnzl6EGbTbV2nVIiMuMU44EMwMjn76GMHeWAKhKuLvyXoC+F3IvXrfy9zmO/WKyUM6c1riWUY7btKiA+9UkyvPnk7KFMPtLz/uS9vrjVFLNqTUSEJNLN5hQL7gIXpsGytO0ekCduR/fg/hV+olVqSm3YAAAAASUVORK5CYII=',
      rightZag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAACt0lEQVR4Xg3LOW6eVRQG4PcM937DP9hYlkgUQ6RQsAiEWAC7YCWUtGyAFqhpEHRI0CCBIjpHJBSxEhzkxP6H+93pHPz0D3358IsbuyY/XlCs7/YU5zjFZgdGp07BEDq4KXwA0PvuqIfDGbT0u69/+hZvr/DrH1gc1WENwUAGM3RDcXQGRbA9/e3nJPX3F5dqdY/ja8ztx++/+YhX5S6P47REODW2Pra+qsbOR5VFWwjHVPKJJF1FevPn019++O7jeYo3h5VG8Ua5OLnCh25T7+RwYfZavVz993q5OehccfImnV3nqdLjD54gTiDAF3cnEJrBAbZNSS//vTKP1FcTk0ppsfYzkpEt58Pls8vb29vTabDWYZJzjsqnJ+vHjx9tVvf3qG3QVpXJ0Y5L2xWmYbPt7W5WeK7RKUqICic7poQY6q4Fw2AUDSykUGUlQ0cUy3XUqCxm8Obe4SypVoRwOC7kLE5szIoBHsmlO6NJO3Qv5GEozI3IiE25K2EeLAiYADiBOwi51NLdCRrGcQ5xTLVUcg1BVeFszXtaWinkIAcALigQDwISby0Vq3dpR8IA2r1cKNfZRTq9F2c1iLuYqQcHg2Dmvbam08QUG1V07zASqDCLouSSE0tojCbGablFoMgkpMxht9QukvICASIXtNLy7rDDakVDeGepzpIUup1mlIZs5Dbo9OknnwEELGgZJgBhHHDYIx/v8/r98+d/P2cVVSOkitRPN9uXfz0j2rRSh1CZDKRmFomgnns62Wyvrq+ncTy2JJ/rRXv76vx04ymr83pci9gYRYISS4N3cgRKvYb15EHOHzy8fPaPgtMe8zHG5y8uH6y3wa7LPbNOIIkQRpCOZt7KzatHFx+Ww0Ki9NX8ZHWy7Sltchtz2aj32nicjZkpLr1m760vp5tN2e8jtHX0Yf4f3da+1L4oEEQAAAAASUVORK5CYII=',
      leftZag:  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAACtElEQVR4Xg2Lu25cZRhF93f5L3OOPeOQmJuDhEIHDa/CC/B4SHSICqS0CERDE2MJAYKEmITEcewZz/nvH7O0taq16eTL++P66nhCDegOAEhghFYhDDM0hSgowQkKkDIwJi0pP/72G9j24vIi8S7nN34lYG1VyOKg0uVKFFIiY/XL+R8s977+6nvttBMkovTDz9/Np3G3fTlvYkoFJswzaxtya2haQ0nUdGa2PLY6GD/9+vjJ+Y+bD+K2vFxtrLS3cQq9t1rLwUZ7IpuOAmQQ8u9/PgFDWbG5708/jK/Ti9OzExErhYVU1TMrCZqV7fY2Or2+uQ5H7zgPMNQF5HL7+upZeFeHLU//etrraM2YedQBAXsnoPXHn8yrcHVzE0LICWoECTQf+SG19dRqK3tMUxSRZtkIZtqbsblW+vF8/Pzy1XoNvdthjDas7He7swdno+JkM21v997r6A1MIKNBwiCiXssqhNsbcAwQosPTeek1MzBa947NmnewYcGR8Oh1sZG8s5LvQoACaK0Yegi+965MNWXnxIAx0AdyWnqDMjuh1KoIkYGNUPqh0zHaYcpwoin1ZiBFjFBVEWLm1ppzTkQAsAQYQdwhTap+dBCRXzkW6g2lIpdqRkYE1v1+AZgEuiRo8G2YaCBo75ZylSCdiMnoYPVefO1k8AYm7rlAjUDi7/ZN18HIffbp5zFO22Vf0bzXfsBQUu4DIJ6P1/t/XowB9RGl4Xj94M62zy+vou2sDUySyhJjTDXpAeL9YFKXaxYnuoL2BRfnzxghj7YKm4liHkszGkOUjtxIYjKM9ncpTnPr4+HDj8j+U5/B5R5k/vfv344m6rfXHb3NSqKvdrs5xKUWeN95nUd69Oi9vpQI0PtfTAn7eE/eLF0Y92eUjrcDISBmrBjbgkrIDPFYCfoCLPgflXOjuIEFgMYAAAAASUVORK5CYII='
    }
  },
  'modern': {
    primary: null,
    secondary: null,
    stroke: null,
    blocks: {
      line:     '#fa1e1e',
      square:   '#f1fa1e',
      arrow:    '#d838cb',
      rightHook:'#f5821f',
      leftHook: '#42c6f0',
      rightZag: '#4bd838',
      leftZag:  '#fa1e1e'
    }
  },
  'retro': {
    primary: null,
    secondary: null,
    stroke: '#000000',
    innerStroke: '#000000',
    blocks: {
      line:     '#fa1e1e',
      square:   '#f1fa1e',
      arrow:    '#d838cb',
      rightHook:'#f5821f',
      leftHook: '#42c6f0',
      rightZag: '#4bd838',
      leftZag:  '#fa1e1e'
    }
  },
  'monochrome': {
    primary: '#ffffff',
    secondary: '#ffffff',
    stroke: '#000000',
    innerStroke: '#000000'
  },
  'aerolab': {
    primary: '#ff7b00',
    secondary: '#000000'
  },
  'chocolate': {
    primary: '#7B3F00',
    secondary: '#7B3F00',
    stroke: '#291811',
    innerStroke: '#291811'
  },
  'gameboy': {
    background: '#C4CFA1',
    primary: null,
    secondary: null,
    stroke: '#414141',
    innerStroke: '#414141',
    innerSquare: '#000000',
    blocks: {
      line:     '#88926A',
      square:   '#585E44',
      arrow:    '#A4AC8C',
      rightHook:'#6B7353',
      leftHook: '#6B7353',
      rightZag: '#595F45',
      leftZag:  '#595F45'
    }
  },
  'vim': {
    background: '#000000',
    primary: '#C2FFAE',
    secondary: '#C2FFAE',
    stroke: '#000000',
    strokeWidth: 3,
    innerStroke: null
  },
};