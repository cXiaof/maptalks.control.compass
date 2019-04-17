const gulp = require('gulp')
const pkg = require('./package.json')
const { BundleHelper } = require('maptalks-build-helpers')
const bundleHelper = new BundleHelper(pkg)

gulp.task('build', () => bundleHelper.bundle('index.js'))

gulp.task(
    'minify',
    gulp.series('build', (done) => {
        bundleHelper.minify()
        done()
    })
)

gulp.task('watch', () => gulp.watch(['index.js', './gulpfile.js'], gulp.series('build')))

// const { TestHelper } = require('maptalks-build-helpers')
// const testHelper = new TestHelper()
// const karmaConfig = require('./karma.config.js')

// gulp.task(
//     'test',
//     gulp.series('build', (done) => {
//         testHelper.test(karmaConfig)
//         done()
//     })
// )

// gulp.task(
//     'tdd',
//     gulp.series('build', (done) => {
//         karmaConfig.singleRun = false
//         gulp.watch(['index.js'], ['test'])
//         testHelper.test(karmaConfig)
//         done()
//     })
// )

gulp.task('default', gulp.series('build'))
